import React, { Component } from "react";
import Card from "@mui/material/Card";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


export default class Repo extends Component {
  render() {
    return (
      <Card className="reposCard">
        <h3 style={{  fontSize:"24px" }}>My GitHub Repos</h3>
        {this.props.repos.map((repo) =>
        <List
          sx={{ width: "100%",  bgcolor: "background.paper" }}
        >
          
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={repo.name}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {repo.description}
                  </Typography>
                  <br/>
                  {repo.language}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="fullWidth" component="li" />
           
        </List> 
        )};
      </Card>
    );
  }
}