"use client";
import React from 'react';
import Layout from './layout';
import {Sheet} from './_components/sheet';

function Page() {

  return (
    <Layout>
      <div>
        <h1>Circus show sheet maker</h1>
        <p>A website to prepare your own circus show</p>
        <Sheet />
      </div>
    </Layout>
  );
}

export default Page;
