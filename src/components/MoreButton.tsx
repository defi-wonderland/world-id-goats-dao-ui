import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import { useCustomTheme } from '~/hooks';

// Props type definition for custom menu items
interface MoreButtonProps {
  menuItems: { label: string; onClick: () => void }[];
}

export const MoreButton = ({ menuItems }: MoreButtonProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <StyledIconButton onClick={handleClick}>
        <MoreVertIcon />
      </StyledIconButton>
      <SMenu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {menuItems.map((item, index) => (
          <SMenuItem
            key={index}
            onClick={(e) => {
              e.preventDefault();
              item.onClick();
              handleClose();
            }}
          >
            {item.label}
          </SMenuItem>
        ))}
      </SMenu>
    </>
  );
};

const StyledIconButton = styled(IconButton)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    border: currentTheme.border,
    borderRadius: currentTheme.borderRadius,
    marginLeft: '0.5rem',
    '@media (max-width: 600px)': {
      width: '2.5rem',
      height: '2.2rem',
    },
  };
});

const SMenu = styled(Menu)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    borderRadius: currentTheme.borderRadius,
    margin: '0.5rem 0',
  };
});

const SMenuItem = styled(MenuItem)(() => {
  return {
    fontWeight: 800,
    '@media (max-width: 600px)': {
      fontSize: '0.8rem',
    },
  };
});
