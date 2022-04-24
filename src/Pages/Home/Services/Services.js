import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png';

const services = [
    {
        name: 'Fluoride Treatement',
        description: 'Our team of neurologists, psychiatrists, psychologists, sleep medicine specialists, gastroenterologists and pain medicine specialists will utilize several physical and mental exercises to help control patient’s chronic pain and teach a series of exercises that the patient can do at home.',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Department of Dental & Maxillofacial Surgery of Evercare Hospital Dhaka offers full scope of the dental specialty, including general dentistry and sd services in oral & maxillofacial surgery, orthodontics and restorative dentistry (endodontics and prosthodontics).',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'The Cardiology Department of Evercare Hospital Dhaka has gained reputation for its dynamic and innovation in the diagnosis, investigation and treatment of patients with all forms of heart diseases, both generally encountered and complex cases.',
        img: whitening
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 , mt : 3 }}>
            <Container>
                <Typography variant="h6" component="div" sx={{ fontWeight: 500 ,color: 'success.main', m:2}}>
                            Our Services
                </Typography>
                <Typography variant="h4" component="div" sx={{ fontWeight: 600 , m:3  }}>
                            Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service=> <Service
                            key={service.name}
                            service= {service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;