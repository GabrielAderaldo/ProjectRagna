import Login from '../login/page/loginPage'
import  FirebaseProvider  from '../context/firebaseContext'
function App() {
  return (
    <>
    <FirebaseProvider>
      <Login/>
    </FirebaseProvider>
    </>
  )
}

export default App
