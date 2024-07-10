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
    install_requires=[
        '',

    ],
    python_requires=">=3.8",


)

```

## Generating Distribution Archive
___

```python
python3 -m pip install --upgrade build

```

```python
python3 -m build
```

```python
dist/
├── example_package_YOUR_USERNAME_HERE-0.0.1-py3-none-any.whl
└── example_package_YOUR_USERNAME_HERE-0.0.1.tar.gz
```
## Gunakan token API
___

- SetUp `nano ~/.pypirc`

```python

[pypi]

username = __token__
password = [token API Key]

```



## Uploading the distribution archives
___

```python
python3 -m pip install --upgrade twine

```

```python
python3 -m twine upload --repository pypi dist/*

```

## Update
___

- Build Paket : ` python setup.py sdist bdist_wheel `
- Upload : `twine upload dist/*`


## Automation

### Linux

- deploy.sh

```python

#!/bin/bash
chmod +x deploy.sh
rmdir dist /S /Q

python3 -m build
python3 -m twine upload --repository pypi dist/*


```

### Windows

deploy.bat

```bash
@echo off

rmdir dist /S /Q

python3 -m build
python3 -m twine upload --repository pypi dist*/

```
