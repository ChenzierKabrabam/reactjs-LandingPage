import { Card, IconButton, makeStyles, Typography } from '@material-ui/core'
import * as AiIcons from 'react-icons/ai'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100vh',
    position: 'fixed',
    top: '0',
    left: '0',
    backgroundColor: '#eee',
    [theme.breakpoints.up('sm')]: {
      width: '60%',
    },
    zIndex: '99',
  },
  menu: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2, 3),
  },
  title: {
    fontWeight: 'bolder',
    fontSize: '28px',
    lineHeight: '36px',
    color: '#37447E',
  },
  buttonContainer: {
    width: '90%',
    border: '0',
    backgroundColor: 'transparent',
    margin: '24px auto',
    padding: theme.spacing(5, 1),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(1),
    },
  },
  button: {
    fontSize: '24px',
    fontWeight: '450',
    textTransform: 'uppercase',
  },
}))

function Menu(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.menu}>
        <Typography className={classes.title} variant='h4'>
          Land
        </Typography>
        <IconButton onClick={props.hideMenuBar}>
          <AiIcons.AiOutlineClose style={{ fontSize: '32px' }} />
        </IconButton>
      </div>
      <Card className={classes.buttonContainer} variant='outlined'>
        <Typography
          className={classes.button}
          variant='h4'
          style={{ marginBottom: '25px' }}
        >
          home
        </Typography>
        <Typography
          className={classes.button}
          variant='h4'
          style={{ marginBottom: '25px' }}
        >
          about
        </Typography>
        <Typography className={classes.button} variant='h4'>
          contact
        </Typography>
      </Card>
    </div>
  )
}

export default Menu
