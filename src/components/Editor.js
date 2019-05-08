import React from 'react'
import { Pre } from '../my-theme/src/components/ui/Pre'
import { ActionButton, ClipboardAction } from '../my-theme/src/components/ui/Editor/elements'
import Play from 'react-feather/dist/icons/play'

export default class Editor extends React.Component {
  state = {
    code: null,
    dirtyCode: true,
  }

  componentDidMount() {
    this.setState({
      code: this.props.children
    })
  }

  onChange = code => {
    this.setState({ code, dirtyCode: true })
  }

  onRun = () => {
    const { code } = this.state
    const script = document.createElement('script')
    script.textContent = code
    document.body.appendChild(script)
    this.setState({ dirtyCode: false })
  }

  getEditorActions = () => {
    const { code, dirtyCode } = this.state
    const iconProps = dirtyCode ? {
      fill: '#2DC450',
      color: '#2DC450',
    } : {}

    return (
      <div style={{ display: 'flex' }}>
        <ActionButton title="Run" onClick={this.onRun}>
          <Play width={15} {...iconProps} />
        </ActionButton>
        <ClipboardAction content={code} />
      </div>
    )
  }

  render() {
    const editorProps = {
      ...this.props,
      actions: this.getEditorActions(),
      onChange: this.onChange,
      readOnly: false,
    }

    return (
      <React.Fragment>
        <Pre {...editorProps} />
      </React.Fragment>
    )
  }
}
