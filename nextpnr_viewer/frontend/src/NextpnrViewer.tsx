import {
  Streamlit,
  withStreamlitConnection,
  ComponentProps,
} from "streamlit-component-lib"
import React, { useCallback, useEffect, useMemo, useState, ReactElement } from "react"
import { getElementGroups } from 'edacation/dist/project/groups';
import { NextPNRViewer } from 'nextpnr-viewer';

function LoadingSpinner() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <div style={{
        border: '4px solid rgba(0, 0, 0, 0.1)',
        borderRadius: '50%',
        borderTop: '4px solid #3498db',
        width: '40px',
        height: '40px',
        animation: 'spin 2s linear infinite'
      }} />
    </div>
  );
}

const styleSheet = document.createElement('style');
styleSheet.innerText = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }`;
document.head.appendChild(styleSheet);

/**
 * This is a React-based component template. The passed props are coming from the 
 * Streamlit library. Your custom args can be accessed via the `args` props.
 */
function NextpnrViewer({ args, disabled, theme }: ComponentProps): ReactElement {
  const { family, device, width, height, routed_json } = args

  const [isFocused, setIsFocused] = useState(false)

  const container: HTMLDivElement | null = document.querySelector('#viewer');

  const style: React.CSSProperties = useMemo(() => {
    if (!theme) return {}
    // Use the theme object to style our button border. Alternatively, the
    // theme style is defined in CSS vars.
    const borderStyling = `1px solid ${isFocused ? theme.primaryColor : "gray"}`
    return { border: borderStyling, outline: borderStyling }
  }, [theme, isFocused])

  useEffect(() => {
    Streamlit.setFrameHeight()
  }, [style, theme])

  // Get example cell colors from EDAcation library
  const cellColors: { [key: string]: string } = {};
  for (const elemGroup of getElementGroups().values()) {
      for (const elem of elemGroup.elements) {
          cellColors[elem] = elemGroup.color;
      }
  }
  const safeContainer = container ?? createFallbackElement();

  function createFallbackElement(): HTMLDivElement {
    const div = document.createElement('div');
    div.id = 'viewer';
    return div;
  }

  const nextpnrViewer = new NextPNRViewer(safeContainer, {
    width: width,
    height: height,
    chip: {
        family: family,
        device: device
    },
    cellColors: cellColors
  });

  nextpnrViewer.render();

  if (routed_json != "") {
    nextpnrViewer.showJson(JSON.parse(routed_json));
  }

  // TODO: fix spinner
  return (
    <div id='viewer' /> 
    //<div>
    //  {isLoading ? (
    //    <LoadingSpinner />
    //  ) : ( <div id='viewer' /> )
    //  }
    //</div>
  )

}

export default withStreamlitConnection(NextpnrViewer)
