from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import relationship
from sqlalchemy import String, Text, DateTime, Integer
from sqlalchemy import ForeignKey
from typing import Optional
from datetime import datetime

Base = declarative_base()

class Article(Base):
    __tablename__ = "articles"

    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(String(1024))
    author: Mapped[str] = mapped_column(String(1024))
    time: Mapped[datetime] = mapped_column(DateTime)
    publisher: Mapped[Optional[str]] = mapped_column(String(1024))
    link: Mapped[Optional[str]] = mapped_column(String(2048))

    passages: Mapped[list["Passage"]] = relationship(
        back_populates="article", cascade="all, delete-orphan"
    )

    references: Mapped[list["Reference"]] = relationship(
        back_populates="article", cascade="all, delete-orphan"
    )

    def __repr__(self) -> str:
        return f"User(id={self.id!r}, title={self.title!r}, author={self.author!r})"

class Passage(Base):
    __tablename__ = "passages"

    id: Mapped[int] = mapped_column(primary_key=True)
    article_id: Mapped[int] = mapped_column(ForeignKey("articles.id"))
    text: Mapped[str] = mapped_column(Text)

    article: Mapped["Article"] = relationship(back_populates="passages")

    def __repr__(self) -> str:
        return f"Passage(id={self.id!r}, text={self.text!r})"


class Reference(Base):
    __tablename__ = "references"

    id: Mapped[int] = mapped_column(primary_key=True)
    article_id: Mapped[int] = mapped_column(ForeignKey("articles.id"))
    title: Mapped[str] = mapped_column(String(1024))
    authors: Mapped[str] = mapped_column(String(2048))
    link: Mapped[str] = mapped_column(String(2048))
    year: Mapped[int] = mapped_column(Integer)

    article: Mapped["Article"] = relationship(back_populates="references")

    def __repr__(self) -> str:
        return f"Reference(id={self.id!r}, title={self.title!r}, authors={self.authors!r}, year={self.year!r})"
