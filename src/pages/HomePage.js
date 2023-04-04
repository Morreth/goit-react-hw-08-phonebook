import SectionTitle from "components/SectionTitle/SectionTitle";
import { ContactPhoneTwoTone } from '@mui/icons-material';
import { Box } from '@mui/material';



 const HomePage=() =>{
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        pt: '32px',
        flexDirection: 'column',
      }}
    >
      <SectionTitle title="">
        {/* <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span> */}
        <ContactPhoneTwoTone fontSize="large" htmlColor="#202020" />
      </SectionTitle>
    </Box>
  );
}
export default HomePage;