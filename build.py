import argparse
from pathlib import Path

from markdown import markdown

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Build Script")
    parser.add_argument(
        "-i", "--input-template", required=True, help="Input template HTML file"
    )
    parser.add_argument("-o", "--output-file", required=False, help="Output HTML file")
    parser.add_argument(
        "-c", "--content", required=True, help="Markdown/RST/TXT file with content"
    )
    parser.add_argument(
        "--watch",
        required=False,
        action="store_true",
        help="Watch for changes in the content file",
    )

    args = parser.parse_args()
    input_template = args.input_template
    output_file = args.output_file
    content = args.content
    watch = args.watch

    file_path = Path(content)
    md = file_path.read_text()
    html = markdown(md)
    # Get the main html
    main_html_path = Path(input_template)
    before_build = ""
    after_build = ""
    with open(main_html_path, "r") as file:
        has_build = False
        for line in file:
            if "@Build" in line:
                has_build = True
            if has_build:
                after_build += line
            else:
                before_build += line
    if has_build:
        new_html = before_build + html + after_build
    else:
        new_html = before_build
    output_path = Path(output_file)
    with open(output_path, "w") as file:
        file.write(new_html)
