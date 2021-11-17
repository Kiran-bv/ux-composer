import React from 'react';
import PropTypes from 'prop-types';

import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

class MultiplePopover extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
      anchorEl: null,
    };
    this.handlePopoverOpen = this.handlePopoverOpen.bind(this);
    this.handlePopoverClose = this.handlePopoverClose.bind(this);
  }
  handlePopoverOpen(event, popoverId) {
    this.setState({
      openedPopoverId: popoverId,
      anchorEl: event.target,
    });
  }
  handlePopoverClose() {
    this.setState({
      openedPopoverId: null,
      anchorEl: null,
    });
  }

  render() {
    const { classes } = this.props;
    const { anchorEl, openedPopoverId } = this.state;

    const multi = [
      {
        _id: 0,
        name: 'name1',
        hoverText: 'text1',
        linkUrl: '#',
      },
      {
        _id: 1,
        name: 'name2',
        hoverText: 'text2',
        linkUrl: '#',
      },
      {
        _id: 2,
        name: 'name3',
        hoverText: 'text3',
        linkUrl: '#',
      },
    ]

  console.log(openedPopoverId)

    return (
      <div className="wrapper">
        <ul>
          {multi.map(m => (
            <li
              key={m._id}
            >
              <Typography
                onMouseEnter={(e) => this.handlePopoverOpen(e, m._id)}
                //onMouseLeave={this.handlePopoverClose}
              >
                {m.name} 
              </Typography>
              <div onMouseLeave={this.handlePopoverClose}>
              <Popover
        
        sx={{
          pointerEvents: 'none',
        }}
        open={openedPopoverId === m._id}
        anchorEl={anchorEl}
        onMouseLeave={this.handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{
          style: { width: '100%',height:'50%' },
        }}
        //onClose={handlePopoverClose}
        disableRestoreFocus
      >
                <Typography>
                  <a
                    href="{m.linkUrl}"
                    target=" /blank"
                  >
                    {m.hoverText}
                  </a>
                </Typography>
              </Popover>
              </div>
            </li>
          ))}
        </ul>
      </div>
      
    );
  }
}

MultiplePopover.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default MultiplePopover;