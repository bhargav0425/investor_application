import React from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableFooter,
  TablePagination,
  Paper,
  IconButton
} from '@mui/material';
import { GetApp, CloudDownload } from '@mui/icons-material';

const TrackRecordSection = () => {
  return (
    <Container>
      <Box my={4} sx={{ backgroundColor: 'white', color: 'black', padding: '16px', borderRadius: '4px' }}>
        <Typography variant="h4">
          Track Record
        </Typography>
        <Button
          variant="contained"
          startIcon={<GetApp />}
          sx={{ backgroundColor: 'blue', color: 'white', marginTop: '16px' }}
        >
          Export to Excel
        </Button>

        <TableContainer component={Paper} sx={{ backgroundColor: 'white', colour: 'black', marginTop: '16px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ color: 'white', backgroundColor: 'blue' }}>Vintage</TableCell>
                <TableCell style={{ color: 'white', backgroundColor: 'blue' }}>| Currency</TableCell>
                <TableCell style={{ color: 'white', backgroundColor: 'blue' }}>| Size</TableCell>
                <TableCell style={{ color: 'white', backgroundColor: 'blue' }}>| Invested</TableCell>
                <TableCell style={{ color: 'white', backgroundColor: 'blue' }}>| realized</TableCell>
                <TableCell style={{ color: 'white', backgroundColor: 'blue' }}>| unrealized</TableCell>
                <TableCell style={{ color: 'white', backgroundColor: 'blue' }}>| Total Value</TableCell>
                <TableCell style={{ color: 'white', backgroundColor: 'blue' }}>| Gross IRR</TableCell>
                <TableCell style={{ color: 'white', backgroundColor: 'blue' }}>| Net RR</TableCell>
                <TableCell style={{ color: 'white', backgroundColor: 'blue' }}>| Net TVPI</TableCell>
                <TableCell style={{ color: 'white', backgroundColor: 'blue' }}>| Loss Ratio</TableCell>
                {/* Add other columns here */}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell >2023</TableCell>
                <TableCell >USD</TableCell>
                <TableCell >Medium</TableCell>
                <TableCell >-</TableCell>
                <TableCell >-</TableCell>
                <TableCell >-</TableCell>
                <TableCell >-</TableCell>
                <TableCell >-</TableCell>
                <TableCell >-</TableCell>
                <TableCell >-</TableCell>
                <TableCell >-</TableCell>
                
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                  count={1}
                  rowsPerPage={5}
                  page={0}
                  SelectProps={{
                    inputProps: { 'aria-label': 'rows per page' },
                    native: true,
                  }}
                  onPageChange={() => {}}
                  onRowsPerPageChange={() => {}}
                  // Add other pagination properties here
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>

        <Box my={4}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Box>

        <Box my={4}>
        <Typography marginBottom='16px'>Deck <Button
            variant="outlined"
            startIcon={<CloudDownload />}
            sx={{ borderColor: 'blue', color: 'black' }}
          >
            Download PDF
          </Button></Typography>
        <Typography>Prospectus
         
          {/* Add some space */}
          <Box sx={{ width: '16px', display: 'inline-block' }}></Box>
          <Button
            variant="outlined"
            startIcon={<CloudDownload />}
            sx={{ borderColor: 'blue', color: 'black' }}
          >
            Download PDF
          </Button>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default TrackRecordSection;