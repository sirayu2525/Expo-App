-- AlterTable
CREATE SEQUENCE badgelist_badgeid_seq;
ALTER TABLE "badgeList" ALTER COLUMN "badgeId" SET DEFAULT nextval('badgelist_badgeid_seq');
ALTER SEQUENCE badgelist_badgeid_seq OWNED BY "badgeList"."badgeId";
