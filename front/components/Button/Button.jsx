import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button as MantineButton } from '@mantine/core';
import * as TablerIcons from '@tabler/icons-react';
import { CMS_BASE_URL } from '../../lib/strapi';

const Button = ({
  label,
  variant,
  color,
  href,
  icon,
  image,
  size,
  radius,
}) => {
  const IconComponent = icon ? TablerIcons[icon.trim()] : null;
  const leftSection = () => {
    if (image?.data?.attributes?.url) {
      return (
        <Image
          src={`${CMS_BASE_URL}${image.data.attributes.url}`}
          alt={image.data.attributes.alternativeText || ''}
          width={20}
          height={20}
        />
      );
    }
 
    return null;
  };
console.log(variant)
  return (
    (<Link href={href || '#'} passHref>
      <MantineButton
        mx="sm"
        variant={variant || 'filled'}
        color={color || 'primary.0'}
        size={size || 'md'}
        radius={'md'}
        leftSection={IconComponent ? <IconComponent color={variant === 'default' ? '#A4A7AE' : '#66ABEF'} size={20} /> :  leftSection()}
      >
        {label}
      </MantineButton>
    </Link>)
  );
};

export default Button; 