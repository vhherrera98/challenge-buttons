import React, {useEffect} from 'react'
import Button from "./components/Button";
import Footer from "./components/Footer";

function App() {

  useEffect(() => {
    document.title = 'Buttons'
  })

  return (
    <>
      <div className="App container">
        <h1>Buttons</h1>
        <div>
          <hr />
          <div>
            <code>{'<Button />'}</code>
            <Button />
          </div>
          <hr />
          <div>
            <code>{'<Button variant="outline" />'}</code>
            <Button
              variant='outline'
            />
          </div>
          <div>
            <code>{'<Button variant="outline" color="#B91646"/>'}</code>
            <Button
              color="#B91646"
              variant='outline'
            />
          </div>
          <hr />
          <div>
            <code>{'<Button variant="text" />'}</code>
            <Button
              variant='text'
            />
          </div>
          <div>
            <code>{'<Button variant="text" color=#F0A500" />'}</code>
            <Button
              color="#F0A500"
              variant='text'
            />
          </div>
          <hr />
          <div>
            <code>{'<Button disableShadow />'}</code>
            <Button
              disableShadow
            />
          </div>
          <div>
            <code>{'<Button disableShadow color="#39A388" />'}</code>
            <Button
              color="#39A388"
              disableShadow
            />
          </div>
          <hr />
          <div>
            <code>{'<Button disabled />'}</code>
            <Button
              disabled
            />
          </div>
          <hr />
          <div>
            <code>{'<Button variant="text" disabled />'}</code>
            <Button
              variant="text"
              disabled
            />
          </div>
          <hr />
          <div>
            <code>{'<Button startIcon="local_grocery_store" />'}</code>
            <Button
              startIcon="local_grocery_store"
            />
          </div>
          <hr />
          <div>
            <code>{'<Button endIcon="face" />'}</code>
            <Button
              endIcon="face"
            />
          </div>
          <hr />
          <div>
            <code>{'<Button startIcon="paid" color="#664E88" />'}</code>
            <Button
              color="#664E88"
              startIcon="paid"
            />
          </div>
          <div>
            <code>{'<Button startIcon="visibility_off" color="#FFB319" />'}</code>
            <Button
              endIcon="visibility_off"
              color="#FFB319"
            />
          </div>
          <hr />
          <div>
            <code>{'<Button size="sm" />'}</code>
            <Button
              size="sm"
            />
          </div>
          <div>
            <code>{'<Button size="md" />'}</code>
            <Button
              size="md"
            />
          </div>
          <div>
            <code>{'<Button size="lg" />'}</code>
            <Button
              size="lg"
            />
          </div>
          <hr />
          <div>
            <code>{'<Button size="sm" color="#80ED99" />'}</code>
            <Button
              color="#80ED99"
              size="sm"
            />
          </div>
          <div>
            <code>{'<Button size="md" color="#57CC99" />'}</code>
            <Button
              color="#57CC99"
              size="md"
            />
          </div>
          <div>
            <code>{'<Button size="lg" color="#38A3A5" />'}</code>
            <Button
              color="#38A3A5"
              size="lg"
            />
          </div>
          <hr />
          <div>
            <code>{'<Button color="default" />'}</code>
            <Button
              color="default"
            />
          </div>
          <div>
            <code>{'<Button color="primary" />'}</code>
            <Button
              color="primary"
            />
          </div>
          <div>
            <code>{'<Button color="secondary" />'}</code>
            <Button
              color="secondary"
            />
          </div>
          <div>
            <code>{'<Button color="danger" />'}</code>
            <Button
              color="danger"
            />
          </div>
          <hr />
          <div>
            <code>{'<Button color="#334257" />'}</code>
            <Button
              color="#334257"
            />
          </div>
          <div>
            <code>{'<Button color="#476072" />'}</code>
            <Button
              color="#476072"
            />
          </div>
          <div>
            <code>{'<Button color="#548CA8" />'}</code>
            <Button
              color="#548CA8"
            />
          </div>
        </div>
        <p style={{ color: 'gray', marginTop: '50px' }}>
          Icons: <a style={{ color: 'gray', textDecoration: 'none' }} href="https://material.io/resources/icons/?style=round">
            https://material.io/resources/icons/?style=round
          </a>
        </p>
      </div>
      <Footer />
    </>
  );
}
export default App;
