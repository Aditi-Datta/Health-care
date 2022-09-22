import React, { useState } from 'react'
import Faq from './Faq';
import faqImg from '../../../images/faq-img2.png';
import Box from '@mui/material/Box';
import { Grid } from "@mui/material";

function FaqQuestions() {

    const [faqs, setfaqs] = useState([
        {
            question: "	Do you have the Government approval?",
            answer: 'Yes. M. P Health Care Center is approved by the Government of Bangladesh on September 2008.',
            open: true
        },
        {
            question: "What is the full name of the Health Center?",
            answer: 'Medical Program Health Care Center ',
            open: false
        },
        {
            question: "Health Center Address?",
            answer: 'TB Gate, Tultikor, Sylhet, Bangladesh.',
            open: false
        },
        {
            question: "	Contact Number?",
            answer: '+88 01720 532169, 01766 857322',
            open: false
        },
        {
            question: "	E-mail Address?",
            answer: 'info@m.p.healthCare.bd',
            open: false
        },
        {
            question: "	Website Address?",
            answer: 'http://www.m.p.health.care.bd/',
            open: false
        }
    ]);
    const headderStyle = {
        padding: '25px',
        background: 'linear-gradient(to right,  rgb(94,76,214), rgb(37,206,199))',
        display: 'flex',
        justifyContent: 'center',
        color:'white',
        fontWeight:'300',

    };
    const imgStyle = {
        borderRadius:900,
        position: 'related',
        marginTop: '4%',
        marginBottom: '2%',
    };
    const faqsStyle = {
        width: '100%',
        height:'100%',
        marginTop:'5%',
        alignItems:'center'
    };
    const faqQuestionStyle = {
        marginTop: '0',
    };
    const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            }
            else {
                faq.open = false;
            }
            return faq;
        }))
    }

    return (
        <div style={{marginLeft:'5%', marginRight:'3%'}}>
            
                <Box style={faqsStyle}>
                    <Grid container direction="row"
                    justifyContent="center"
                    alignItems="center"  spacing={{ xs: 3, md: 12}} >
                        <Grid  component="div" item  xs={4} sm={6} md={4} style={imgStyle} //data-aos="fade-up"
                        >
                            <img src={faqImg}></img>
                        </Grid>

                        <Grid 
                        className='faqs' item  xs={4} sm={4} md={8}  component="div" style={faqQuestionStyle}>
                            <h1 className='htag' style={headderStyle}>Frequently Asked Questions</h1>
                            {
                                faqs.map((faq, i) => (
                                    <Faq faq={faq} index={i} toggleFAQ={toggleFAQ}></Faq>
                                ))
                            }
                        </Grid>

                    </Grid>
                </Box>
        </div>
    )
}

export default FaqQuestions;