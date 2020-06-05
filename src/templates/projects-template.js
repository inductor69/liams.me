/* eslint-disable indent */
import React from 'react';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';

const ProjectsTemplate = () => {
    const { title, subtitle } = useSiteMetadata();

    return (
        <Layout title={`Projects - ${title}`} description={subtitle}>
            <Sidebar />
            <Page title="Projects">
            </Page>
        </Layout>
    );
};

export default ProjectsTemplate;