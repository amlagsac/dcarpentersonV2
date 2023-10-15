import { AppBar, Box, Container, Divider, Toolbar, Typography, Link, Menu, IconButton, MenuItem, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export default function Navbar() {

    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up("lg"));
    const tablet = useMediaQuery(theme.breakpoints.up("sm"));
    const mobile = useMediaQuery(theme.breakpoints.up("xs"));

    const sizes = () => {
        if (desktop) return "large";
        if (tablet) return "medium";
        if (mobile) return "small";
      };

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };

    const pages = ['Home', 'Products', 'Services', 'About', 'Contact Us'];

    return (
        <>
            <AppBar component="nav" position='sticky' elevation={0} color='default' sx={{ p: 1, borderBottom: (theme) => `1px solid ${theme.palette.divider}`}}>
                <Container disableGutters maxWidth={false} sx={{ px: {xs: 0, sm: 1.5}}}>
                    <Toolbar disableGutters sx={{ flexWrap: 'wrap'}}>
                        <Box component='img' alt='DCS Logo' src='./resources/logoHeader.png' sx={{ height: {xs: 28, sm: 38, md: 38,lg: 38, xl: 38}, width: {xs: 80, sm: 107, md: 107, lg: 107, xl: 107} }}></Box>
                        <Divider orientation='vertical' sx={{ m: .75 }} variant='fullWidth' flexItem/>
                        <Typography variant='h5' sx={{ color: '#000000', fontSize: {xs: "1rem", sm: "1.4rem", md: "1.6rem", lg: "1.8rem"}}}>D Carpenter's Son Ent.</Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: "right" }}>
                            <IconButton
                                size={sizes()}
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                                >
                                    <MenuIcon fontSize={sizes()}/>
                                </IconButton>
                            <Menu
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                keepMounted
                                transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <MenuItem component={Link} onClick={handleCloseNavMenu} href="/">
                                        <Typography textAlign="center">Home</Typography>
                                </MenuItem>
                                <MenuItem component={Link} onClick={handleCloseNavMenu} href="/products">
                                        <Typography textAlign="center">Products</Typography>
                                </MenuItem>
                                <MenuItem component={Link} onClick={handleCloseNavMenu} href="/services">
                                        <Typography textAlign="center">Services</Typography>
                                </MenuItem>
                                <MenuItem component={Link} onClick={handleCloseNavMenu} href="/about">
                                        <Typography textAlign="center">About</Typography>
                                </MenuItem>
                                <MenuItem component={Link} onClick={handleCloseNavMenu} href="/contact">
                                        <Typography textAlign="center">Contact Us</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: "flex", justifyContent: "right" }}}>
                        <nav>
                            <Link
                                color="text.primary"
                                underline='hover'
                                href="/"
                                sx={{ mx: 1}}
                                >
                                Home
                            </Link>
                            <Link
                                color="text.primary"
                                underline='hover'
                                href="/products"
                                sx={{ mx: 1 }}
                                >
                                Products
                            </Link>
                            <Link
                                color="text.primary"
                                underline='hover'
                                href="/services"
                                sx={{ mx: 1 }}
                                >
                                Services
                            </Link>
                            <Link
                                color="text.primary"
                                underline='hover'
                                href="/about"
                                sx={{ mx: 1 }}
                                >
                                About
                            </Link>
                            <Link
                                color="text.primary"
                                underline='hover'
                                href="/contact"
                                sx={{ mx: 1 }}
                                >
                                Contact Us
                            </Link>
                        </nav>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}