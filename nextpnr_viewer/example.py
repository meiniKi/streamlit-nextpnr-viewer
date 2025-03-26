import streamlit as st
from nextpnr_viewer import nextpnr_viewer

s = ""
with open("~/routed.json", "r") as f:
    s = f.read()

nextpnr_viewer("ecp5", "85k", s)
