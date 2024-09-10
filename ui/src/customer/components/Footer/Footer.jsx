import { Button, Grid, Link, Typography } from "@mui/material"

function Footer() {
    return (
        <div>
            <Grid className="bg-black text-white text-center mt-10"
                container
                sx={{ bgcolor: 'black', color: 'white', py: 3 }}
            >
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Company</Typography>
                    <div>
                        <Button className="pb-5" variant="h6">about</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6">Blogs</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6">Careers</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6">Press</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6">Partners</Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Solutions</Typography>
                    <div>
                        <Button className="pb-5" size="small" variant="h6">Marketing</Button>
                    </div>
                    <div>
                        <Button className="pb-5" size="small" variant="h6">Analytics</Button>
                    </div>
                    <div>
                        <Button className="pb-5" size="small" variant="h6">Commerce</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6">Insights</Button>
                    </div>
                    <div>
                        <p><small><Button className="pb-5" variant="h6">Support</Button></small></p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Documentation</Typography>
                    <div>
                        <Button className="pb-5" variant="h6">Guides</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6">Api status</Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Legal</Typography>
                    <div className="text-xs">
                        <Button className="pb-5" size="small" variant="h6">claim</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6">privacy</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6">terms</Button>
                    </div>
                </Grid>
                <Grid className="pt-20" item xs={12}>
                    <Typography  variant="body2" component={"p"} align="center">
                        © Copyright Threadora | All rights reserved
                    </Typography>
                    <Typography variant="body2" component={"p"} align="center">
                        Deleloped by<Link> Ammannaidu Gollapalli</Link>
                    </Typography>
                </Grid>
            </Grid>

        </div>
    )
}

export default Footer
