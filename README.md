# streamlit-nextpnr-viewer

Streamlit component to embed [nextpnr-viewer](https://github.com/EDAcation/nextpnr-viewer) into your streamlit app. It can render just the FPGA architecture or overlay the implemented (placed and routed) design.

![preview](./doc/preview.gif)

## Installation instructions

```sh
pip install streamlit-nextpnr-viewer
```

## Usage instructions

```python
import streamlit as st
from nextpnr_viewer import nextpnr_viewer

nextpnr_viewer(
    family="ecp5",
    device="25k",
    routed_json= "",
)
```