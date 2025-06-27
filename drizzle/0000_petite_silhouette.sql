CREATE TABLE "urls" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "urls_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"originalUrl" varchar(2048) NOT NULL,
	"shortenedUrl" varchar(255) NOT NULL,
	"createdAt" date DEFAULT now() NOT NULL,
	"updatedAt" date DEFAULT now() NOT NULL,
	CONSTRAINT "urls_originalUrl_unique" UNIQUE("originalUrl"),
	CONSTRAINT "urls_shortenedUrl_unique" UNIQUE("shortenedUrl")
);
