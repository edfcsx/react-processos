import React, {Component} from 'react'

export default class Grid extends Component{

    ApplyGridSystem(props){
        
        let classes = ''

        if(props.xs != null){
            classes += `col-xs-${props.xs} `
        }

        if(props.sm != null){
            classes += `col-sm-${props.sm} `
        }

        if(props.md != null){
            classes += `col-md-${props.md} `
        }

        if(props.lg != null){
            classes += `col-lg-${props.lg} `
        }

        return classes
    }

    render(){
        const gridClasses = this.ApplyGridSystem(this.props)

        return (
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }

}