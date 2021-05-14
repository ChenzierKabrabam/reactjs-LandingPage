import { Button, IconButton, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import * as IoIcons from 'react-icons/io'
import Menu from './Menu'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2, 4),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2, 10, 0, 10),
    },
  },
  group: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      padding: theme.spacing(0, 1),
      alignItems: 'center',
      flexDirection: 'row',
      color: '#505F98',
      textTransform: 'capitalize',
    },
  },
  group_buttons: {
    fontSize: '14px',
    textTransform: 'capitalize',
    color: '#505F98',
  },
  menu: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  title: {
    fontWeight: 'bolder',
    fontSize: '26px',
    lineHeight: '36px',
    color: '#37447E',
  },
  buyButton: {
    [theme.breakpoints.up('sm')]: {
      width: '160px',
      height: '26px',
    },
  },
}))

function Header() {
  const classes = useStyles()
  const [showMenu, setShowMenu] = React.useState({ menuBar: false })

  const menuHandler = () => {
    const menu = showMenu.menuBar
    setShowMenu({ menuBar: !menu })
  }

  let menuContainer = null
  if (showMenu.menuBar) {
    menuContainer = <Menu hideMenuBar={menuHandler} />
  }

  return (
    <>
      <div className={classes.root}>
        <div className={classes.group}>
          <Button
            className={classes.group_buttons}
            style={{
              marginRight: '30px',
            }}
          >
            home
          </Button>
          <Button
            className={classes.group_buttons}
            style={{
              marginRight: '30px',
            }}
          >
            about
          </Button>
          <Button className={classes.group_buttons}>contact</Button>
        </div>

        <IconButton className={classes.menu} edge='start' onClick={menuHandler}>
          <IoIcons.IoIosMenu style={{ fontSize: '38px' }} />
        </IconButton>
        {menuContainer}

        <Typography className={classes.title} variant='h4'>
          LAND
        </Typography>
        <Button
          className={classes.buyButton}
          style={{
            borderRadius: '2px',
            backgroundColor: '#111B47',
            lineHeight: '18px',
            fontSize: '12px',
            fontWeight: '500',
            color: '#fff',
            textTransform: 'capitalize',
          }}
        >
          buy now
        </Button>
      </div>
    </>
  )
}

export default Header
