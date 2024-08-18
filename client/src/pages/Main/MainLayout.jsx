import { MainNav } from '@/components/Nav/MainNav';
import React from 'react';
import { Outlet } from 'react-router-dom';

function MainLayout() {
    return (
        <div className="relative min-h-screen flex flex-col bg-background">
            <div className="flex-1">
                <Outlet />
            </div>
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-transparent">
                <MainNav />
            </div>
        </div>
    );
}

export default MainLayout;
