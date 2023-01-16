export default function code_to_city(code: string): string {
    if (code === 'LED') return 'Saint-Petersburg';
    if (code === 'LAX') return 'Los Angeles';
    if (code === 'JNK') return 'New York';
    if (code === 'SFO') return 'San Francisco';
    if (code === 'NSK') return 'Norilsk';

    return 'bruh';
}