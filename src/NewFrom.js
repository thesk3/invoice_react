import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ReactDataGrid from 'react-data-grid';


const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },

});

const columns = [
  { key: 'id', name: 'ID' },
  { key: 'name', name: 'Title' },
  { key: 'price', name: 'Count' } ];


  const rows = [{id: 0, title: 'row1', count: 20}, {id: 1, title: 'row1', count: 40}, {id: 2, title: 'row1', count: 60}];


class OutlinedTextFields extends React.Component {
  
  state = {
    clientName: 'Cat in the Hat',
    contactPerson:"contactPerson",
    name: 'name',
    data:[],
   error: null,
   // isLoaded: false,
   items: []
  };

  componentDidMount() {
    fetch("new.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  




  handleChange =  event => {
    this.setState({
   clientName: event.target.value,
     
    });
  };
  handleChange1 =  event => {
    this.setState({
      contactPerson: event.target.value,
   
    });
  };

  handleChange2 = event => {
    this.setState({
      name : event.target.value,
     
    });
  };

  handleSubmit = event => {
    console.log("event-->", this.state);

    event.preventDefault();
  }
  render() {
    const { classes } = this.props;
    const { error, isLoaded, items } = this.state;

    return (
     
     <div className="body1">
     <h4>data which was to sent</h4>
      <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
        <TextField 
          id="outlined-name"
          label="clientName"
          className={classes.textField}
          value={this.state.clientName}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField error
          id="outlined-name"
          label="Name"
          className={classes.textField}
          value={this.state.contactPerson}
          onChange={this.handleChange1}
          margin="normal"
          variant="outlined"
        />

         <TextField
          id="outlined-name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange2}
          margin="normal"
          variant="outlined"
        /> 
        <h4>getting multiple data</h4>
 <ul>
<div className="col-sm-12">
 <Table className={classes.table}>
        <TableHead>
        <TableRow>
            <CustomTableCell>Dessert (100g serving)</CustomTableCell>
            <CustomTableCell align="right">Calories</CustomTableCell>
            <CustomTableCell align="right">Fat (g)</CustomTableCell>
            <CustomTableCell align="right">Carbs (g)</CustomTableCell>
            <CustomTableCell align="right">Protein (g)</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
{items.map((item,index) => (
  <TableRow >
    <CustomTableCell component="th" scope="item">
      {item.name}
    </CustomTableCell>
    <CustomTableCell align="right">{item.name}</CustomTableCell>
    <CustomTableCell align="right">{item.price}</CustomTableCell>
    <CustomTableCell align="right">{item.price}</CustomTableCell>
    <CustomTableCell align="right">{item.price}</CustomTableCell>
  </TableRow>
))}
</TableBody>
</Table>
</div>

<ReactDataGrid
  columns={columns}
  rowGetter={i => items[i]}
  rowsCount={3}
  minHeight={150} />


        {items.map(item => (
          <li key={item.name}>
 <TextField
          id="outlined-name"
          label="Name"
          className={classes.textField}
          value={item.name}
          onChange={this.handleChange2}
          margin="normal"
          variant="outlined"
        /> 

            {item.name} {item.price}
          </li>
        ))}
      </ul>
        <Button variant="contained" color="primary" type="submit">
          Hello World
      </Button>

      </form>
      </div>
      
    );
  }


// constructor(props) {
//   super(props);
//   this.state = {
//     error: null,
//     isLoaded: false,
//     items: []
//   };
// }

// componentDidMount() {
//   fetch("new.json")
//     .then(res => res.json())
//     .then(
//       (result) => {
//         this.setState({
//           isLoaded: true,
//           items: result.items
//         });
//       },
//       // Note: it's important to handle errors here
//       // instead of a catch() block so that we don't swallow
//       // exceptions from actual bugs in components.
//       (error) => {
//         this.setState({
//           isLoaded: true,
//           error
//         });
//       }
//     )
// }

// render() {
//   const { error, isLoaded, items } = this.state;
//   if (error) {
//     return <div>Error: {error.message}</div>;
//   } else if (!isLoaded) {
//     return <div>Loading...</div>;
//   } else {
//     return (
//       <ul>
//         {items.map(item => (
//           <li key={item.name}>
//             {item.name} {item.price}
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);
// class Contact extends Component {
//   render() {
//     return (
//       <div>
//         <h2>GOT QUESTIONS?</h2>
//         <p>The easiest thing to do is post on
//         our <a href="http://forum.kirupa.com">forums</a>.
//         </p>
//       </div>
//     );
//   }
// }

// export default Contact;