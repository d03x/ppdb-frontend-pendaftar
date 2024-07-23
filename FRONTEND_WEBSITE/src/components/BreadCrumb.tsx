import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
    label: string;
    link?: string;
}

interface BreadCrumbProps {
    items: BreadcrumbItem[];
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ items }) => (
    <div className="my-3">
        <Breadcrumb>
            {items.map((item, index) => (
                <Breadcrumb.Item key={index}>
                    {item.link ? <Link to={item.link}>{item.label}</Link> : item.label}
                </Breadcrumb.Item>
            ))}
        </Breadcrumb>
    </div>
);

export default BreadCrumb;
