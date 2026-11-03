export default function AdSlot({slot="genel",label="Reklam"}:{slot?:string;label?:string}) {
 const client=process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
 const slots:Record<string,string|undefined>={ust:process.env.NEXT_PUBLIC_AD_SLOT_TOP,orta:process.env.NEXT_PUBLIC_AD_SLOT_MID,alt:process.env.NEXT_PUBLIC_AD_SLOT_BOTTOM,genel:process.env.NEXT_PUBLIC_AD_SLOT_GENERIC};
 const adSlot=slots[slot] || slots.genel;
 if(client && adSlot) return <div className="ad-wrap"><span>REKLAM</span><ins className="adsbygoogle" style={{display:"block",minHeight:90}} data-ad-client={client} data-ad-slot={adSlot} data-ad-format="auto" data-full-width-responsive="true" /></div>;
 return <div className="ad-placeholder"><span>REKLAM ALANI · {label.toLocaleUpperCase("tr-TR")}</span><small>AdSense veya doğrudan reklam kodu eklendiğinde burada görüntülenir.</small></div>;
}
