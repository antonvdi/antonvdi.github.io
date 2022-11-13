from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import String, Text, DateTime, Integer, Column
from sqlalchemy import ForeignKey

Base = declarative_base()

class Article(Base):
    __tablename__ = "articles"

    id = Column("id", Integer, primary_key=True)
    title = Column("title", String(1024))
    author = Column("author", String(1024))
    time = Column("time", DateTime)
    publisher = Column("publisher", String(1024))
    link = Column("link", String(2048))

    passages = relationship("Passage")

    references = relationship("Reference")

    def __repr__(self) -> str:
        return f"User(id={self.id!r}, title={self.title!r}, author={self.author!r})"

class Passage(Base):
    __tablename__ = "passages"

    id = Column("id", primary_key=True)
    article_id = Column("article_id", ForeignKey("articles.id"))
    text = Column("text", Text)

    def __repr__(self) -> str:
        return f"Passage(id={self.id!r}, text={self.text!r})"


class Reference(Base):
    __tablename__ = "references"

    id = Column("id", Integer, primary_key=True)
    article_id = Column("article_id", ForeignKey("articles.id"))
    title = Column("title", String(1024))
    authors = Column("authors", String(2048))
    link = Column("link", String(2048))
    year = Column("year", Integer)

    def __repr__(self) -> str:
        return f"Reference(id={self.id!r}, title={self.title!r}, authors={self.authors!r}, year={self.year!r})"
