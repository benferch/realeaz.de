import React from 'react';

export default function Muted({ children }: { children: React.ReactNode }) {
	return <p className="text-gray-600">{children}</p>;
}
