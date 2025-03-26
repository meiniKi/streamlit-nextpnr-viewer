# streamlit-nextpnr-viewer

Streamlit component to embed [nextpnr-viewer](https://github.com/EDAcation/nextpnr-viewer) into a streamlit app. It can be used to render a logical representation of the target FPGA architecture or overlay the implemented (placed and routed) design.

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