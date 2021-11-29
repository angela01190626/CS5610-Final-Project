import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Layout from '../Layout/Layout';
import './Spinner.css';

export default function Spinner() {
    const renderMainContent = () => {
        return (
            <div className="spinner-position">
                <CircularProgress color="success" />
            </div>
        );
    }
    return (
        <Layout
            main={renderMainContent()}
        />
    );
}