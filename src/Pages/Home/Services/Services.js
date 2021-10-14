import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import Service from '../Service/Service';

const Services = () => {
        const [services, setServices] = useState([]);
        // Load Data:
        useEffect(() => {
                fetch('./services.json')
                        .then(res => res.json())
                        .then(data => setServices(data))
        }, [])
        return (
                <div id="services">
                        <Container fixed>
                                <Box sx={{ textAlign: 'center', pt: 5, pb: 5, fontWeight: 'bold', fontSize: 36 }}>
                                        <span variant="contained" color="success">Our Services</span>
                                </Box>
                                <div className="row row-cols-lg-3 row-cols-md-2 g-4">
                                        {
                                                services.map(service => <Service
                                                        service={service}
                                                        key={service.id}
                                                ></Service>)
                                        }
                                </div>
                        </Container>
                </div>
        );
};

export default Services;