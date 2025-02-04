# streamlit-nextpnr-viewer

Streamlit component that allows you to do intergrate [nextpnr-viewer](https://github.com/EDAcation/nextpnr-viewer) into a streamlit app.

## Installation instructions

```sh
pip install streamlit-nextpnr-viewer
```

## Usage instructions

```python
import streamlit as st

from nextpnr_viewer import nextpnr_viewer

value = nextpnr_viewer()

st.write(value)
```