import React from 'react';
class Video extends React.Component {
    render(){
       return(
          <div className="myVideo">
              <video loop  autoPlay  src={this.props.src} type={this.props.type}/>
         </div>
          )
        }
      }

      export default Video;