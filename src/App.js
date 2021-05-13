import { CssBaseline, makeStyles } from '@material-ui/core'
import path from './assets/image/Path.png'
import group from './assets/image/Group.png'
import Footer from './components/Footer'
import Header from './components/Header'
import Content from './components/Content'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '1000px',
    backgroundImage: 'url(' + path + ')',
    backgroundSize: '50% 999px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top right',
  },
  header: {
    width: '100%',
    height: '1000px',
    backgroundImage: 'url(' + group + ')',
    backgroundSize: '30% 650px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 0 bottom 100px',
  },
}))
function App() {
  const classes = useStyles()
  return (
    <>
      <div className={classes.root}>
        <header className={classes.header}>
          <Header />
          <Content />
        </header>
      </div>
      <Footer />
      <CssBaseline />
    </>
  )
}

export default App
