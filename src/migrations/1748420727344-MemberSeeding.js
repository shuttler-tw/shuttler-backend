/**
 * @typedef {import('typeorm').MigrationInterface} MigrationInterface
 */

/**
 * @class
 * @implements {MigrationInterface}
 */
const bcrypt = require('bcrypt');

module.exports = class MemberSeeding1748420727344 {
  constructor() {
    this.name = 'MemberSeeding1748420727344';
  }

  async up(queryRunner) {
    const saltRounds = 10;

    const membersRepo = queryRunner.manager.getRepository('Members');
    const levelsRepo = queryRunner.manager.getRepository('Levels');

    const level1 = await levelsRepo.findOneBy({ level: 1 });
    const level2 = await levelsRepo.findOneBy({ level: 2 });

    const defaultMembers = [
      {
        name: '使用者1',
        email: 'example1@example.com',
        password: await bcrypt.hash('Aa12345678', saltRounds),
        photo:
          'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        level_id: level1.id,
        points: 0,
      },
      {
        name: '使用者2',
        email: 'example2@example.com',
        password: await bcrypt.hash('Bb12345678', saltRounds),
        photo:
          'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        level_id: level2.id,
        points: 500,
      },
    ];

    if (!level1 || !level2) {
      throw new Error('✘ Level 資料尚未建立，請先執行 seed-levels.js');
    }

    for (const member of defaultMembers) {
      const exists = await membersRepo.findOneBy({ email: member.email });
      if (!exists) {
        await membersRepo.save(member);
      }
    }
  }

  async down(queryRunner) {
    const membersRepo = queryRunner.manager.getRepository('Members');
    const defaultMembers = [
      {
        email: 'example1@example.com',
      },
      {
        email: 'example2@example.com',
      },
    ];
    for (const member of defaultMembers) {
      const exists = await membersRepo.findOneBy({ email: member.email });
      if (exists) {
        await membersRepo.remove(exists);
      }
    }
  }
};
