
import React, { useState, useEffect } from 'react';
import Card from '../components/ui/Card';
import { MOCK_BOTS } from '../constants';
import type { Bot } from '../types';
import { BotStatus } from '../types';

const BotCard: React.FC<{ bot: Bot }> = ({ bot }) => {
    const getStatusColor = (status: BotStatus) => {
        switch (status) {
            case BotStatus.Active: return 'border-neon-green text-neon-green';
            case BotStatus.Idle: return 'border-neon-blue text-neon-blue';
            case BotStatus.Charging: return 'border-yellow-400 text-yellow-400';
            case BotStatus.Maintenance: return 'border-red-500 text-red-500';
            default: return 'border-gray-500 text-gray-500';
        }
    };
    
    const getBatteryColor = (battery: number) => {
        if (battery > 70) return 'bg-neon-green';
        if (battery > 30) return 'bg-yellow-400';
        return 'bg-red-500';
    };

    return (
        <Card className="flex flex-col">
            <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg">{bot.id}</h3>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getStatusColor(bot.status)}`}>
                    {bot.status}
                </span>
            </div>
            <div className="my-4 space-y-2 text-sm">
                <p><strong>Location:</strong> {bot.location}</p>
                <p><strong>Tasks Today:</strong> {bot.tasksCompleted}</p>
            </div>
            <div className="mt-auto">
                <div className="flex items-center gap-2">
                    <span className="text-sm">Battery: {bot.battery}%</span>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <div className={`${getBatteryColor(bot.battery)} h-2.5 rounded-full`} style={{ width: `${bot.battery}%` }}></div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
                    <button className="px-3 py-1 rounded bg-white/10 hover:bg-white/20">Start Task</button>
                    <button className="px-3 py-1 rounded bg-white/10 hover:bg-white/20">Pause</button>
                    <button className="px-3 py-1 rounded bg-white/10 hover:bg-white/20">Send to Charge</button>
                    <button className="px-3 py-1 rounded bg-red-500/20 text-red-400 hover:bg-red-500/30">Maintenance</button>
                </div>
            </div>
        </Card>
    );
};

const BotManagementPage: React.FC = () => {
    const [bots, setBots] = useState<Bot[]>(MOCK_BOTS);

    useEffect(() => {
        const interval = setInterval(() => {
            setBots(prevBots =>
                prevBots.map(bot => {
                    let newBattery = bot.battery;
                    if (bot.status === BotStatus.Active) {
                        newBattery = Math.max(0, bot.battery - 1);
                    } else if (bot.status === BotStatus.Charging) {
                        newBattery = Math.min(100, bot.battery + 2);
                    }
                    return { ...bot, battery: newBattery };
                })
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Bot Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {bots.map(bot => (
                    <BotCard key={bot.id} bot={bot} />
                ))}
            </div>
        </div>
    );
};

export default BotManagementPage;
