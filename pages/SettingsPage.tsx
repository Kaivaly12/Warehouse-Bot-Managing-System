
import React from 'react';
import Card from '../components/ui/Card';

const SettingsPage: React.FC = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">Settings</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* User Profile Settings */}
                <Card className="lg:col-span-2">
                    <h3 className="text-xl font-bold mb-4">User Profile</h3>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-400">Name</label>
                                <input type="text" defaultValue="Admin User" className="mt-1 w-full form-input" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400">Email</label>
                                <input type="email" defaultValue="admin@warehouse.ai" className="mt-1 w-full form-input" />
                            </div>
                        </div>
                         <div>
                            <label className="block text-sm font-medium text-gray-400">Role</label>
                            <input type="text" defaultValue="Warehouse Manager" disabled className="mt-1 w-full form-input disabled:opacity-50" />
                        </div>
                         <div>
                            <label className="block text-sm font-medium text-gray-400">Change Password</label>
                            <input type="password" placeholder="New Password" className="mt-1 w-full form-input" />
                        </div>
                        <div className="text-right">
                            <button type="submit" className="px-4 py-2 rounded-lg bg-neon-blue text-dark-bg font-semibold">Save Changes</button>
                        </div>
                    </form>
                </Card>

                {/* Notification Preferences */}
                <Card>
                    <h3 className="text-xl font-bold mb-4">Notifications</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <label htmlFor="in-app-notifs" className="font-medium">In-App Notifications</label>
                            <input type="checkbox" id="in-app-notifs" className="form-checkbox" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="email-notifs" className="font-medium">Email Alerts</label>
                            <input type="checkbox" id="email-notifs" className="form-checkbox" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="sms-notifs" className="font-medium">SMS for Critical Alerts</label>
                            <input type="checkbox" id="sms-notifs" className="form-checkbox" />
                        </div>
                    </div>
                </Card>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Bot Calibration */}
                <Card>
                     <h3 className="text-xl font-bold mb-4">Bot Calibration</h3>
                     <div className="space-y-2">
                         <label className="block text-sm font-medium text-gray-400">Performance Tuning (Efficiency vs Speed)</label>
                         <input type="range" min="0" max="100" defaultValue="75" className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer" />
                     </div>
                </Card>
                {/* Theme Preferences */}
                 <Card>
                     <h3 className="text-xl font-bold mb-4">Theme</h3>
                     <div className="flex gap-4">
                        <button className="flex-1 py-2 border-2 border-neon-blue rounded-lg bg-neon-blue/20 text-neon-blue">Dark</button>
                        <button className="flex-1 py-2 border border-gray-600 rounded-lg">Light</button>
                        <button className="flex-1 py-2 border border-gray-600 rounded-lg">Auto</button>
                     </div>
                </Card>
                {/* System Info */}
                <Card>
                     <h3 className="text-xl font-bold mb-4">System Info</h3>
                     <div className="text-sm space-y-1">
                        <p><strong>Version:</strong> 2.5.1-beta</p>
                        <p><strong>Last Update:</strong> 2024-07-20</p>
                        <p><strong>License Key:</strong> ••••••••-••••-••••-PRO</p>
                     </div>
                </Card>
            </div>
        </div>
    );
};

// Simple form input styling
const style = document.createElement('style');
style.innerHTML = `
    .form-input {
        background-color: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 0.5rem;
        padding: 0.5rem 1rem;
        transition: all 0.2s;
    }
    .form-input:focus {
        border-color: #00f6ff;
        box-shadow: 0 0 0 2px rgba(0, 246, 255, 0.3);
        outline: none;
    }
    .form-checkbox {
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 0.25rem;
        background-color: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.3);
    }
    .form-checkbox:checked {
        background-color: #00f6ff;
        border-color: #00f6ff;
    }
`;
document.head.appendChild(style);


export default SettingsPage;
