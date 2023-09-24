import React, {useState} from 'react'; // Importa React desde la biblioteca 'react'
import Shop from "../../../components/shop/shop";
import Sidebar from "../../../components/sidebar/sidebar";
import { useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import '../articles.css';
import './articles.movil.css';


const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));

function ArticlesMovil(){
    const [expanded, setExpanded] = React.useState(false);

    const location = useLocation();

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
      };
    const { sliderValue, mostratingValue, viewValue, tittleValue, categoryValue } = location.state || {};

    const [sliders, setSliders] = useState(sliderValue);
    const [ratings, setRatings] = useState(5);
    const [mostratings, setmostRatings] = useState(mostratingValue);
    const [categories, setCategories] = useState(categoryValue);
    const [views, setViews] = useState(viewValue);
    const [tittles, settittles] = useState(tittleValue);
    
    const handleFilter = (sliderValue, ratingValue, categoryValue, mostratingValue, viewValue, tittleValue) => {
        console.log(mostratingValue);
        setSliders(sliderValue);
        setRatings(ratingValue);
        setCategories(categoryValue);
        setmostRatings(mostratingValue);
        setViews(viewValue);
        settittles(tittleValue);
    };

    return(
        <div className="ArticlesMovil">
           <div className="center-container">
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Filters</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        <Sidebar onFilter={handleFilter}></Sidebar>
                    </Typography>
                    </AccordionDetails>
            </Accordion>
           </div>
            
            <Shop sliderValue={sliders} ratingValue={ratings} categoryValue={categories} mostratingValue={mostratings} viewValue={viewValue} tittleValue={tittleValue}></Shop>
        </div>

    );
}

export default ArticlesMovil;