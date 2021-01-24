import React, { Component } from 'react';
import './App.css';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';

let rand = Math.floor(Math.random() * 1001);
let url = "https://picsum.photos/id/" + rand + "/1600/900";

class App extends Component {
  render() { 
    return ( 
      <div className="App">
        <header className="App-header">
          <Container>
            <Row style={{margin: 0, marginBottom: 10}}>
              <Card style={{color: '#000', margin: 0}}>
                <Card.Img onError={this.onReload} src={url} />
              </Card>
            </Row>
            <Row style={{ margin: 0}}>
              <Col style={{padding: 0, paddingRight: 5}}>
                <Button onClick={this.onReload} block size="lg" variant="outline-primary">Reload</Button>
              </Col>
              <Col style={{padding: 0, paddingLeft: 5}}>
                <Button onClick={this.onDownload} block size="lg" variant="warning">Download</Button>
              </Col>
            </Row>
          </Container>
        </header>
      </div>
     );
  }

  onReload = () => {
    rand = Math.floor(Math.random() * 1001);
    url = "https://picsum.photos/id/" + rand + "/1600/900";
    this.setState({url});
  }

  onDownload = () => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = url;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const a = document.createElement('a');
      a.download = 'image.png';
      a.href = canvas.toDataURL('image/png');
      a.click();
    };
  }
}
 
export default App;
