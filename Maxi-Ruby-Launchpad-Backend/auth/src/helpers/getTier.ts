import { Holder } from "../models/holder";

const tiers = [
  {
    name: "Diamond",
    minQuantity: 85000,
    weight: 465.5,
  },
  {
    name: "Platinum",
    minQuantity: 37500,
    weight: 95,
  },
  {
    name: "Gold",
    minQuantity: 10000,
    weight: 40,
  },
  {
    name: "Silver",
    minQuantity: 3000,
    weight: 7,
  },
  {
    name: "Bronze",
    minQuantity: 750,
    weight: 3.2,
  },
];

async function getTier(address: string) {
  const holder = await Holder.findOne({ address: address }); // Eğer holder modelinizde email değil de başka bir şeyi kullanıyorsanız, ona göre bu kısmı güncelleyin.

  if (!holder) {
    return null; // Eğer bu kullanıcı bir holder değilse, null dönebilirsiniz. Ya da varsayılan bir tier belirleyip onu döndürebilirsiniz.
  }

  let userTier: any = null;
  for (let tier of tiers) {
    if (holder.quantity >= tier.minQuantity) {
      userTier = tier.name;
      break;
    }
  }

  return userTier || "Bronze"; // Kullanıcının tier bilgisi bulunmazsa, varsayılan olarak 'Bronze' döndürülüyor.
}


export default getTier;