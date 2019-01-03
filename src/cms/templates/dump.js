import React from 'react'

export default class GeneralPreview extends React.Component {

    render() {
        var {entry} = this.props

        return <pre>
            {JSON.stringify(entry.get("data"), null, 2)}
        </pre>
    }
}

