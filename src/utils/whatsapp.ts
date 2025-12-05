export const WHATSAPP_NUMBER = '6289733488887';

export const WHATSAPP_MESSAGES = {
  KONSULTASI_GRATIS: 'Halo Tim Vista, Saya tertarik untuk Konsultasi Gratis dan informasi produk Vista.',
  EDUKASI_TRADING: 'Halo Tim Vista, Saya tertarik untuk program Edukasi tradingnya.',
  PILIHAN_EDUKASI: 'Halo Tim Vista, Saya mau konsultasi untuk pilihan program Edukasi tradingnya.',
  PROGRAM_TANTANGAN: 'Halo Tim Vista, Saya tertarik untuk program Tantangannya.',
  PILIH_TANTANGAN: 'Halo Tim Vista, Saya bingung milih program Tantangannya.',
  ALGO_TRADING: 'Halo Tim Vista, Saya tertarik untuk mengetahui lebih banyak Algo Trading ATMnya.',
  VIP_MEMBERSHIP: 'Halo Tim Vista, Saya tertarik gabung VIP Membership Vista.',
} as const;

export function createWhatsAppLink(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
