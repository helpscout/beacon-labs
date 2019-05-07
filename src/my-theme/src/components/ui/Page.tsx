import * as React from 'react'
import { SFC, Fragment, useEffect } from 'react'
import { PageProps, useConfig } from 'docz'
import Edit from 'react-feather/dist/icons/edit-2'
import styled from 'styled-components'

import { ButtonLink } from './Button'
import { GithubLink, Sidebar, Main } from '../shared'
import { get } from '../../utils/theme'
import { mq } from '../../styles/responsive'

const Wrapper = styled.div`
  flex: 1;
  color: ${get('colors.text')};
  background: ${get('colors.background')};
  min-width: 0;
  position: relative;
`

export const Container = styled.div`
  box-sizing: border-box;
  margin: 0 auto;

  ${mq({
    width: ['100%', '100%', 920],
    padding: ['20px', '0 40px 40px'],
  })}

  ${get('styles.container')};
`

const EditPage = styled(ButtonLink.withComponent('a'))`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  padding: 2px 8px;
  margin: 8px;
  border-radius: ${get('radii')};
  border: 1px solid ${get('colors.border')};
  opacity: 0.7;
  transition: opacity 0.4s;
  font-size: 14px;
  color: ${get('colors.text')};
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    opacity: 1;
    background: ${get('colors.border')};
  }

  ${mq({
    visibility: ['hidden', 'hidden', 'visible'],
    top: [0, -60, 32],
    right: [0, 0, 40],
  })};
`

const EditIcon = styled(Edit)<{ width: number }>`
  margin-right: 5px;
`

const loadBundle = (beaconBuild) => {
  (function(w, doc, fn) {
    w.Beacon = fn = function(method, options, data) {
      w.Beacon.readyQueue.push({
        method: method,
        options: options,
        data: data
      });
    };
    fn.readyQueue = [];

    function load() {
      var pageScript = doc.getElementsByTagName('script')[0];
      var script = doc.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = beaconBuild;
      pageScript.parentNode.insertBefore(script, pageScript);
      window.__BEACON_BUILD__ = beaconBuild;
    }

    if (doc.readyState === 'complete') {
      return load();
    }

    if (w.attachEvent) {
      w.attachEvent('onload', load);
    } else {
      w.addEventListener('load', load, false);
    }
  })(window, document, window.Beacon || function() {})
}

const initBeacon = (beaconId) => {
  window.Beacon('init', beaconId);
  window.__BEACON_ID__ = beaconId
}

const defaultBeaconBuild = 'https://beacon-v2.helpscout.net'
const defaultBeaconId = '879c4d54-f2d3-4b1b-831d-96498de9bfb7'
const loadBeacon = (id, BOI) => {
  const beaconId = id || defaultBeaconId;
  const beaconBuild = BOI ? `https://${BOI}--beacon2.netlify.com/loader.js` : defaultBeaconBuild

  // If Beacon hasn't been loaded yet, load and init.
  if (!window.Beacon) {
    loadBundle(beaconBuild);
    initBeacon(beaconId);
    return
  }

  // If the build changed, destroy the beacon, load the new build and init.
  if (window.__BEACON_BUILD__ !== beaconBuild) {
    window.Beacon('destroy');
    loadBundle(beaconBuild);
    initBeacon(beaconId);
    return
  }

  // If only the Beacon ID changed, destroy it and init it.
  if (window.__BEACON_ID__ !== beaconId) {
    window.Beacon('destroy');
    initBeacon(beaconId);
    return
  }
}

export const Page: SFC<PageProps> = ({
  children,
  doc: { link, fullpage, beaconId, BOI, edit = true },
}) => {
  const { repository } = useConfig()
  useEffect(() => {
    loadBeacon(beaconId, BOI)
  })
  const content = (
    <Fragment>
      {link && edit && (
        <EditPage href={link} target="_blank">
          <EditIcon width={14} /> Edit page
        </EditPage>
      )}
      {children}
    </Fragment>
  )

  return (
    <Main>
      {repository && <GithubLink repository={repository} />}
      {!fullpage && <Sidebar />}
      <Wrapper>{fullpage ? content : <Container>{content}</Container>}</Wrapper>
    </Main>
  )
}
