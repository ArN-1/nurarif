# SetUp untuk upload package di `pypi`

## setup.py

```python
import pathlib
import setuptools

setuptools.setup(
    name="latestearthquake",
    version="0.0.1",
        author="",
    author_email="",
    description="This package will get the latest earthquake from BMKG",
    long_description=pathlib.Path("README.md").read_text(),
    long_description_content_type="text/markdown",
    url="https://github.com/teolloDEV/Indonesia-last-earthquake",
    license = "The Unlicense",
    project_urls={
        "Website": "",
    },
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: GNU General Public License v3 (GPLv3)",
        "Operating System :: OS Independent",
        "Development Status :: 5 - Production/Stable",
    ],
    # package_dir={"": "src"},
    # packages=setuptools.find_packages(where="src"),
    packages=setuptools.find_packages(),
    python_requires=">=3.8",


)

```

## deploy.sh

```python

#!/bin/bash
chmod +x deploy.sh

python3 -m build
python3 -m twine upload --repository pypi dist/*


```