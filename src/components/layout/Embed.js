import React, { useContext } from 'react'

import StyleContext from 'utils/StyleContext'
import UXContext from 'utils/UXContext'
import Panel from 'components/base/Panel'
import Themes from './embed/Themes'
import Code from './embed/Code'
import ContactPrompt from 'components/base/ContactPrompt'
import Select from 'components/base/FancySelect'

export default function Embed(props) {
  const { themes, theme, setTheme } = useContext(StyleContext)
  const { embedOpen, setEmbedOpen, typeShare, setTypeShare } =
    useContext(UXContext)

  return (
    <Panel
      small={props.small}
      open={embedOpen}
      toggleClose={() => {
        setEmbedOpen((prevOpen) => !prevOpen)
      }}
      index={0}
    >
      <h2>
        Intégrer{' '}
        <Select
          fancy
          value={typeShare}
          onChange={setTypeShare}
          options={[
            { value: 'simulator', label: `ce simulateur` },
            { value: 'result', label: `cette fiche` },
          ]}
        />
      </h2>
      <Code id={props.id} typeShare={typeShare} />
      {props.children && (
        <>
          <h3>Options d'intégration</h3>
          {props.children}
        </>
      )}
      <h3>Choisissez un thème</h3>
      <Themes themes={themes} theme={theme} setTheme={setTheme} />
      <ContactPrompt configurator />
    </Panel>
  )
}
