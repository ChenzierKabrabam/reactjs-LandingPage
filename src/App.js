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
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'top right',
    [theme.breakpoints.up('sm')]: {
      backgroundSize: '70% 899px',
    },
    [theme.breakpoints.up('md')]: {
      backgroundSize: '65% 999px',
      backgroundPosition: 'top right',
    },
  },
  header: {
    width: '100%',
    height: '1000px',
    backgroundImage: 'url(' + group + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '80% auto',
    backgroundPosition: 'right 0 bottom 60px',
    [theme.breakpoints.up('sm')]: {
      backgroundSize: '50% auto',
      backgroundPosition: 'right 0 bottom 170px',
    },
    [theme.breakpoints.up('md')]: {
      backgroundSize: '42% auto',
      backgroundPosition: 'right 0 bottom 100px',
    },
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
