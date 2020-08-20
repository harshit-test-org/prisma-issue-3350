import { PrismaClient } from "@prisma/client";

async function main() {
  const client = new PrismaClient();

  const data = await client.user.findMany();
  console.log(data);

  let publisher;
  if (true) {
    const ChatMedia = await client.media.findOne({
      where: { id: "x" },
      include: { publisher: true },
    });
    if (!ChatMedia) {
      throw new Error("ChatRoom is not linked to a media");
    }
    publisher = ChatMedia.publisher;
  }
  client.disconnect();
}

main();
